import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4 mb-6" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
        <div className="md:w-1/2">
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>

      <div className="mt-16">
        <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
      </div>

      <div className="mt-16">
        <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skeleton className="h-80 w-full rounded-xl" />
          <Skeleton className="h-80 w-full rounded-xl" />
          <Skeleton className="h-80 w-full rounded-xl" />
        </div>
      </div>
    </div>
  )
}
