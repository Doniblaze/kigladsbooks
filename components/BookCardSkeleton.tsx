export default function BookCardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-neutral-100 animate-pulse">
            {/* Image placeholder */}
            <div className="aspect-[2/3] w-full bg-neutral-50 p-4">
                <div className="h-full w-full bg-neutral-200/50 rounded-sm" />
            </div>

            {/* Content placeholder */}
            <div className="p-6 md:p-10 space-y-4">
                <div className="space-y-3">
                    <div className="h-5 w-3/4 rounded-full bg-neutral-200/50" />
                    <div className="h-5 w-1/2 rounded-full bg-neutral-200/50" />
                </div>

                <div className="mt-8 flex flex-col gap-8">
                    <div className="flex items-end justify-between">
                        <div className="space-y-2">
                            <div className="h-3 w-12 rounded-full bg-neutral-100" />
                            <div className="h-8 w-20 rounded-full bg-neutral-200/50" />
                        </div>
                    </div>
                    <div className="h-14 w-full rounded-xl bg-neutral-900/10" />
                </div>
            </div>
        </div>
    );
}
