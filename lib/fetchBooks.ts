import Papa from "papaparse";
import { Book } from "@/types/book";

const SHEET_CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSqlHFPyD2qtsPfMKpt78ndYL4ThRwXcCiLvsUxqbntPl5M_eogK2qBExcHgkqtJS6eh9OD_7PQiA9D/pub?gid=0&single=true&output=csv";

export async function fetchBooks(): Promise<Book[]> {
    const response = await fetch(SHEET_CSV_URL, { cache: "no-store" });

    if (!response.ok) {
        throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    const csvText = await response.text();

    return new Promise((resolve, reject) => {
        Papa.parse<Record<string, string>>(csvText, {
            header: true,
            skipEmptyLines: true,
            complete(results) {
                const books: Book[] = results.data
                    .map((row) => ({
                        title: (row["title"] || row["Title"] || "").trim(),
                        category: (row["category"] || row["Category"] || "").trim(),
                        imageUrl: (row["imageUrl"] || row["ImageUrl"] || row["image_url"] || row["Image URL"] || "").trim(),
                        price: (row["price"] || row["Price"] || "").trim(),
                        sellarLink: (row["sellarLink"] || row["SellarLink"] || row["sellar_link"] || row["Sellar Link"] || "").trim(),
                    }))
                    .filter((book) => book.title.length > 0);

                resolve(books);
            },
            error(err: Error) {
                reject(err);
            },
        });
    });
}
