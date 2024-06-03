import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseapi } from "../constants";

const ThePost = () => {
  // base api link
  // const baseapi = import.meta.env.VITE_BASE_API_LINK;
  // console.log("the link => ", baseapi);

  const params = useParams();
  const [post, setPost] = useState();
  console.log("from the post => ", params);

  // function to get the single blog post

  console.log("posts inside post data state => ", post);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseapi}/post/${params.slug}`);
      const fullresponse = response.json();
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log("the post => ", miles);
        setPost(miles.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="p-3">
        <img src={post?.post_image} alt="img" />
        <h5 className="text-green-500">{post?.title}</h5>
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: post?.post_content }}
        />
      </div>

      <div className="flex items-center">
        <button className="bg-blue-500 rounded-md px-2 py-1 font-semibold">
          <Link to="/blog">Back to blog</Link>
        </button>
      </div>


    </div>
  );
};

export default ThePost;
