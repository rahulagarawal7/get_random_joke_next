export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white mt-4 font-medium text-lg">Fetching a hilarious joke...</p>
    </div>
  );
}
