import { ThemeSwitcher } from "@/components/ThemeSwitcher2";
import Button from "../components/button/Button";

const Header = () => {
  return (
    // className='bg-white dark:bg-black'
    <div className="header-2" >
      {/* bg-white */}
      <nav className=" py-2 md:py-4">

        <div className="container px-4 mx-auto md:flex md:items-center flex justify-center items-center position-relative">
          <div className="flex justify-between items-center position-absolute left-0">
            <a href="#" className="font-bold text-xl text-indigo-600">STRAVEL</a>
          </div>

          {/* <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"  id="navbar-collapse">
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Trang Chủ</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">About</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Điểm Đến</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Dịch Vụ</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Ảnh</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Blogs</a>

            <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors  duration-300"
            >
            </a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Đặt ngay
            </a>
          </div> */}

          <div className="d-flex gap-4">
            <button>Trang Chủ</button>
            <button>About</button>
            <button>Điểm Đến</button>
            <button>Dịch Vụ</button>
            <button>Ảnh</button>
            <button>Blogs</button>
          </div>

          {/* <div className="d-flex gap-4">
            <button>Tổng Hợp</button>
            <button>Hawaii</button>
            <button>Mumbai</button>
            <button>Paris</button>
            <button>Sydney</button>
            <button>Tokyo</button>
          </div> */}

            <div className="head-action position-absolute right-0">
              {/* <button className="pr-4"><i className="fa-regular fa-sun"></i></button> */}
              <ThemeSwitcher />
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
              <button><i className="fa-solid fa-user"></i></button>
              <Button text="Đặt ngay" />
            </div>

        </div>
      </nav>
      {/* slider bg-indigo-100 */}
      <div className=" py-6 md:py-12">
        <div className="container px-4 mx-auto">
          {/*  */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className=" md:text-4xl font-medium mb-2">
              MỌI CHUYẾN ĐI ĐỀU ĐÁNG GIÁ
            </h1>
            <p className=" mb-2">Khám Phá Các Vùng Đất Mới Cùng Chúng Tôi </p>
            <p className=" mb-2">Những Chuyến Đi Đang Chờ Đợi Bạn</p>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
              Khám phá ngay
            </button>
            <div className="mt-4">
              <img
                src="//via.placeholder.com/1000x785/fff?text=iMac+Mockup"
                alt="mockup"
                className="d-block max-w-full rounded shadow-md"
              />
            </div>
          </div>
          {/*  */}
          {/* <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
              <h5 className="text-xl font-medium uppercase mb-4">
                Fresh Design
              </h5>
              <p className="text-gray-600">
                FWR blocks bring in an air of fresh design with their creative
                layouts and blocks, which are easily customizable
              </p>
            </div>
            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
              <h5 className="text-xl font-medium uppercase mb-4">Clean Code</h5>
              <p className="text-gray-600">
                FWR blocks are the cleanest pieces of HTML blocks, which are
                built with utmost care to quality and usability.
              </p>
            </div>
            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
              <h5 className="text-xl font-medium uppercase mb-4">
                Perfect Tool
              </h5>
              <p className="text-gray-600">
                FWR blocks is a perfect tool for designers, developers and
                agencies looking to create stunning websites in no time.
              </p>
            </div>
          </div> */}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Header;
