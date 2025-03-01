import { Link } from "@inertiajs/react";

export default function Home({posts}){
    console.log(posts);
    return (
    <>
    <h1 className="title"> Hellon { name }</h1>
    <div>
        {posts.map(post => (
        <div key={post.id} className="p-4 border"> 
        <div className="text-sm text-slate-600">
            <span>Posted on: </span>
            <span>
                {new Date(post.created_at).
               toLocaleDateString()
               }
            </span>
        </div>
            <p className="font-medium">{post.body}</p>
        </div>

        ))}
    </div>
    </>
    );
}