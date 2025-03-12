

function Footer() {
  return (
    
<footer className="bg-primary-700 ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="/logo_white.svg" className="h-10 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-lg text-white font-bold whitespace-nowrap ">ECUALERT</span>
              </a>
          </div>
         
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center ">© 2024 <a href="https://alert.ecuahub.net/" className="hover:underline">Ecualert™</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

  )
}

export default Footer
