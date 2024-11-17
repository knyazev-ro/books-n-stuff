export default function () {
  return (
    <div className=" items-center flex px-10 h-screen w-full border-2 bg-books-gray-dark border-books-gray-lightest">
      <div className="border-2 border-books-gray-lightest w-1/2 h-5/6">
        <img
          className="w-full h-full object-cover"
          src="https://vinyl-is.ru/upload/iblock/aff/1d9zx6tfq26lnax4gvgymdosunamkmn7.jpg"
          alt="Description"
        />
      </div>
      <div className="justify-center items-center flex flex-col w-1/2 h-5/6">
        <div className="flex flex-col gap-2 w-5/6">
          <div className="font-bold text-books-white text-6xl text-wrap truncate">
            ORGINAL FUCKING WORK
          </div>
          <div  className="text-white font-semibold text-2xl text-wrap">
            GGGGGGGGGGGGGGGGGGGGGGGG THIS IS SOME TEST WHAT DO YOU EXPECT
            YPPPPPPPPPPPPPPPPPP
          </div>
        </div>
      </div>
    </div>
  );
}
