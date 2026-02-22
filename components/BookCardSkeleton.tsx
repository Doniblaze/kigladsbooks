export default function BookCardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden rounded-[2rem] bg-white border border-slate-100 animate-pulse">
            {/* Image placeholder */}
            <div className="aspect-square w-full bg-slate-100" />

            {/* Content placeholder */}
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <div className="h-4 w-3/4 rounded-full bg-slate-100" />
                    <div className="h-4 w-1/2 rounded-full bg-slate-100" />
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    <div className="h-6 w-1/3 rounded-full bg-slate-100" />
                    <div className="h-12 w-full rounded-2xl bg-slate-100" />
                </div>
            </div>
        </div>
    );
}
