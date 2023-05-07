export const GiftSkeleton = () => {
  return (
    <div className="border border-slate-200 rounded-md p-3 w-full mx-auto mb-1">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="grid grid-cols-11 gap-4">
              <div className="h-5 bg-slate-100 rounded col-span-1"></div>
              <div className="h-5 bg-slate-100 rounded col-span-5"></div>
              <div className="h-5 bg-slate-100 rounded col-span-1"></div>
              <div className="h-5 bg-slate-100 rounded col-span-1"></div>
              <div className="h-5 bg-slate-100 rounded col-span-1"></div>
              <div className="h-5 bg-slate-100 rounded col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div>
      {Array.from({ length: 10 }, () => '').map(() => (
        <GiftSkeleton key={Math.random()} />
      ))}
    </div>
  );
};

export default Loading;
