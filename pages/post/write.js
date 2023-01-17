import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Write() {
  const idRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const [showLink, setShowLink] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch("/api/post/write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("fetch error");
        })
        .then((data) => {
          setShowLink(true);
          alert(data.message);
        })
        .catch((error) => alert(`request error: ${error}`));
    }
  };

  return (
    <>
      <Head>
        <title>Write a post</title>
      </Head>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <br />
        <input
          className="rounded bg-pink-500 px-2"
          type="submit"
          value="Create"
        />
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>Created Post</Link>
      )}
    </>
  );
}
