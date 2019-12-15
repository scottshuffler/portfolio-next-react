import { useState } from "react";

const photos = [
  {
    src: "/static/2.jpg",
    width: 3,
    height: 2,
    tag: "nature"
  },
  {
    src: "/static/5.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/1.jpg",
    width: 2,
    height: 3,
    tag: "nature"
  },
  {
    src: "/static/32.jpg",
    width: 2,
    height: 3,
    tag: "portraits"
  },
  {
    src: "/static/11.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/3.jpg",
    width: 3,
    height: 2,
    tag: "nature"
  },
  {
    src: "/static/31.jpg",
    width: 2,
    height: 3,
    tag: "portraits"
  },
  {
    src: "/static/12.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/30.jpg",
    width: 2,
    height: 3,
    tag: "portraits"
  },
  {
    src: "/static/10.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/9.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/8.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/7.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/6.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/4.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/13.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/29.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/14.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/15.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/16.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/17.jpg",
    width: 3,
    height: 2,
    tag: "portraits, animals"
  },
  {
    src: "/static/18.jpg",
    width: 3,
    height: 2,
    tag: "portraits, animals"
  },
  {
    src: "/static/19.jpg",
    width: 3,
    height: 2,
    tag: "portraits, animals"
  },
  {
    src: "/static/20.jpg",
    width: 3,
    height: 2,
    tag: "portraits, animals"
  },
  {
    src: "/static/21.jpg",
    width: 3,
    height: 2,
    tag: "portraits, animals"
  },
  {
    src: "/static/22.jpg",
    width: 3,
    height: 2,
    tag: "portraits, animals"
  },
  {
    src: "/static/23.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/24.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/25.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/26.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/27.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  },
  {
    src: "/static/28.jpg",
    width: 3,
    height: 2,
    tag: "portraits, animals"
  },
  {
    src: "/static/33.jpg",
    width: 3,
    height: 2,
    tag: "portraits"
  }
];

function Gallery() {
  const [data, setData] = useState();

  const handleUpdate = e => {
    setData("");
  };

  return (
    <div>
      
    </div>
  );
}

export default Gallery;