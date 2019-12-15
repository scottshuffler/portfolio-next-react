import { useState } from "react";

const photos = [
  {
    src: "/static/2.jpg",
    tag: "nature"
  },
  {
    src: "/static/5.jpg",
    tag: "portraits"
  },
  {
    src: "/static/1.jpg",
    tag: "nature"
  },
  {
    src: "/static/32.jpg",
    tag: "portraits"
  },
  {
    src: "/static/11.jpg",
    tag: "portraits"
  },
  {
    src: "/static/3.jpg",
    tag: "nature"
  },
  {
    src: "/static/31.jpg",
    tag: "portraits"
  },
  {
    src: "/static/12.jpg",
    tag: "portraits"
  },
  {
    src: "/static/30.jpg",
    tag: "portraits"
  },
  {
    src: "/static/10.jpg",
    tag: "portraits"
  },
  {
    src: "/static/9.jpg",
    tag: "portraits"
  },
  {
    src: "/static/8.jpg",
    tag: "portraits"
  },
  {
    src: "/static/7.jpg",
    tag: "portraits"
  },
  {
    src: "/static/6.jpg",
    tag: "portraits"
  },
  {
    src: "/static/4.jpg",
    tag: "portraits"
  },
  {
    src: "/static/13.jpg",
    tag: "portraits"
  },
  {
    src: "/static/29.jpg",
    tag: "portraits"
  },
  {
    src: "/static/14.jpg",
    tag: "portraits"
  },
  {
    src: "/static/15.jpg",
    tag: "portraits"
  },
  {
    src: "/static/16.jpg",
    tag: "portraits"
  },
  {
    src: "/static/17.jpg",
    tag: "portraits, animals"
  },
  {
    src: "/static/18.jpg",
    tag: "portraits, animals"
  },
  {
    src: "/static/19.jpg",
    tag: "portraits, animals"
  },
  {
    src: "/static/20.jpg",
    tag: "portraits, animals"
  },
  {
    src: "/static/21.jpg",
    tag: "portraits, animals"
  },
  {
    src: "/static/22.jpg",
    tag: "portraits, animals"
  },
  {
    src: "/static/23.jpg",
    tag: "portraits"
  },
  {
    src: "/static/24.jpg",
    tag: "portraits"
  },
  {
    src: "/static/25.jpg",
    tag: "portraits"
  },
  {
    src: "/static/26.jpg",
    tag: "portraits"
  },
  {
    src: "/static/27.jpg",
    tag: "portraits"
  },
  {
    src: "/static/28.jpg",
    tag: "portraits, animals"
  },
  {
    src: "/static/33.jpg",
    tag: "portraits"
  }
];

function Gallery() {
  const [category, setCategory] = useState('all');

  return (
    <div className="container">
      <div className="subMenu">
        <ul>
          <li><a href="/" onClick={(e) => {setCategory('all'); e.preventDefault()}}>All</a></li>
          <li><a href="/" onClick={(e) => {setCategory('portraits');e.preventDefault()}}>Portraits</a></li>
          <li><a href="/" onClick={(e) => {setCategory('nature'); e.preventDefault()}}>Nature</a></li>
          <li><a href="/" onClick={(e) => {setCategory('weddings'); e.preventDefault()}}>Weddings</a></li>
          <li><a href="/" onClick={(e) => {setCategory('animals'); e.preventDefault()}}>Animals</a></li>
        </ul>
      </div>

      <div className="ml">
        {photos.map(i => {
          if(category === 'all') {
            return (
              <div key={i.src} className="ml-pnl ">
                <img src={i.src} key={i.src} className="ml-pnl__cntnt" />
              </div>
            );
          }
          else if(i.tag.includes(category) && category !== 'all') {
            return (
              <div key={i.src} className="ml-pnl ">
                <img src={i.src} key={i.src} className="ml-pnl__cntnt" />
              </div>
            );
          } 
        })}
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          color: #333;
        }
        .subMenu {
          text-align: center;
        }
        .subMenu ul {
          display: inline-table;
          padding-left: 0px;
        }
        .subMenu li {
          display: inline;
          padding: 6px 8px;
        }
        .subMenu a {
          color: black;
          text-decoration: none;
          font-size: 13px;
        }

        /* MASONRY CSS */
        .ml {
          box-sizing: border-box;
          column-count: 1;
          column-gap: 0;
          position: relative;
        }
        .ml * {
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .ml {
            column-count: 2;
          }
        }
        @media (min-width: 1200px) {
          .ml {
            column-count: 3;
          }
        }
        .ml-pnl {
          margin: 0;
          padding: 5px;
        }

        @media (min-width: 768px) {
          .ml-pnl {
            break-inside: avoid;
          }
        }
        .ml-pnl__cntnt {
          overflow: hidden;
          width: 100%;
        }
        .ml-pnl__cntnt--img {
          max-width: 100%;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default Gallery;
