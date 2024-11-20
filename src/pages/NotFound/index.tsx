import React from "react";

// export default function NotFound() {
//     return (
//         <>
//             <h1>404 NOT FOUND</h1>
//             <div className="card">
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to test HMR
//                 </p>
//             </div>
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//         </>
//     )
// }

class NotFoundComponent extends React.Component<never, never>{
    render() {
        return (
            <>
                <h1>404 NOT FOUND</h1>
                <div className="card">
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </>
        )
    }
}

export default NotFoundComponent
