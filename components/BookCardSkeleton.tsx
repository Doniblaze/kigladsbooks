export default function BookCardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden bg-dark border border-[var(--border)] animate-pulse">
            {/* Image placeholder */}
            <div className="aspect-[2/3] w-full bg-surface p-4 border-b border-[var(--border)]">
                <div className="h-full w-full bg-[var(--border)]/50" />
            </div>

            {/* Content placeholder */}
            <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-3">
                    <div className="h-6 w-3/4 rounded-sm bg-[var(--border)]" />
                    <div className="h-6 w-1/2 rounded-sm bg-[var(--border)]" />
                </div>

                <div className="mt-8 flex flex-col gap-6">
                    <div className="flex items-end justify-between">
                        <div className="space-y-2">
                            <div className="h-2 w-12 bg-[var(--border)]" />
                            <div className="h-8 w-20 bg-[var(--border)]/50" />
                        </div>
                    </div>
                    <div className="h-12 w-full border border-[var(--border)] bg-surface/50" />
                </div>
            </div>
        </div>
    );
}
