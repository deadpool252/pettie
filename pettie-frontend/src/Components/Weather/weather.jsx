function Weather() {
    return (
      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-300
                w-96 h-56 m-auto rounded-xl 
                shadow-2xl transform hover:scale-110 
                transition-transform">

            <div className="w-full px-8 absolute top-6">
                <div className="flex justify-between">
                <div>
                    <p className="font-light">City Name</p>
                    <p className="text-lg font-medium tracking-widest">
                    Tokyo
                    </p>
                </div>
                <div>
                    画像
                </div>
                </div>
            </div>

        </div>
      </div>
    )
  }
  
  export default Weather