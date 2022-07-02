import React from 'react'
import { useState,useEffect } from 'react'

export default function Login() {
 
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
   

    const [submit,setSubmit] = useState();

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const changePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    const get_access_token = async () => {

        const payload = {
            username: username,
            password: password
        }
        console.log(payload);

        // ,{
        //     method: "POST",
        //     headers : { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     mode: "no-cors",
        //     body: payload

        // }

        
        try{
            const response  = await fetch('http://localhost:8085/test.php')

            const access_token = await response.json();

            console.log(access_token);
        }
        catch(e){
            console.log(e);
        }

            



        

        // fetch('http://localhost:8085/test.php',{
        //     method: "POST",
        //     headers : { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //        },
        //     mode: "no-cors",
        //     body: JSON.stringify(user_data)

        // }).then(response => response.json()).then(data => console.log(data));
   
    }



   

  return (
    <div>
        <div>
            {/* navbar */}
            <div className="navbar bg-base-100 shadow">
                <div className="flex-none">
                    {/* <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button> */}
                    
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Sigorta Sistemi</a>
                </div>
                <div className="flex-none">
                   
                </div>
            </div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Toggle Button */}

                    <div className="container">
                    <section className="h-screen">
                        <div className="px-6 h-full text-gray-800">
                            <div
                            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                            >
                            <div
                                className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                            >
                                <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                                />
                            </div>
                            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                                <form>
                

                            

                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="username"
                                    placeholder="Kullanici Adi"
                                    onChange={e => setUsername(e.target.value)}
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="sifre"
                                    placeholder="Şifre"
                                    onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                

                                <div className="text-center lg:text-left">
                                    <button
                                    type="button"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={() => {get_access_token()}}
                                    >
                                    Giriş Yap
                                    </button>
                                    
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </section>

                    </div>
                    
                </div> 
                
            </div>
        
        </div>
    </div>
  )
}
