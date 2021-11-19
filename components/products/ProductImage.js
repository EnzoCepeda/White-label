import { useState, useRef } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import logo  from '../../images/default.jpeg'

function ProductImage({ images }) {

    const defaultImage =
        {
            "url": "Image 2021-08-10 at 11.20.24 (1).jpeg",
            "link": logo,
            "main": false
        };

    const image = images && images.length != 0 ? images[0] : defaultImage
    const [mainImg, setMainImg] = useState(image);
    const ref = useRef();

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-96">
        <Image
          src={mainImg.link}
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        <button
          aria-label="left-scroll"
          className="h-32 bg-palette-lighter hover:bg-palette-light  absolute left-0 z-10 opacity-75"
          onClick={() => scroll(-300)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-3 mx-1 text-palette-primary" />
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
        >
          {
            images.map((imgItem, index) => (
              <button
                key={index}
                className="relative w-40 h-32 flex-shrink-0 rounded-sm "
                onClick={() => setMainImg(imgItem)}
              >
                {
                  <Image
                      src={imgItem.link}
                      layout="fill"
                      className=""
                  />
                }
              </button>
            ))
          }
        </div>
        <button
          aria-label="right-scroll"
          className="h-32 bg-palette-lighter hover:bg-palette-light  absolute right-0 z-10 opacity-75"
          onClick={() => scroll(300)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="w-3 mx-1 text-palette-primary" />
        </button>
      </div>
    </div>
  )
}

export default ProductImage