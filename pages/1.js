export default function Firstwebsite() {
  return (
    <div className="w-full h-screen flex flex-col bg-orange-50">
      <div className="w-full h-20 bg-orange-200 flex items-center justify-between px-8 flex-row">
        <div className="text-2xl font-bold text-orange-800">Khangarid website</div>

        <div className="space-x-6 flex">
          <div className="text-orange-700 hover:text-orange-900 hover:font-bold">Home</div>
          <div className="text-orange-700 hover:text-orange-900 hover:font-bold">About</div>
          <div className="text-orange-700 hover:text-orange-900 hover:font-bold">Contact</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="font-bold text-4xl text-orange-800 mb-2">My website info</p>
          <p className="text-orange-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div>
            <img src="https://freepngimg.com/save/10443-business-free-download-png/652x500"></img>
          </div>
        </div>
      </div>


      <div className="w-full h-16 bg-orange-100 flex items-center justify-center text-orange-700">
        <div>@address Ulaanbaatar, Mongolia</div>
      </div>
    </div>
  );
}
