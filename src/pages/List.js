// /* eslint-disable no-cond-assign */
// import axios from "axios";
// // import "./App.css";
// // import { Container } from "react-bootstrap";

// function App() {
//   //   let nama =["heloo"];
//   // for (let index = 0; index < nama.length; index++) {
//   //   console.log('nama')

//   // let angka= 5000;
//   // let hasil= 0;

//   //  function tambah(operasi){
//   //   if (operasi < 5000) {
//   //     return 0 ;
//   //   }else{
//   //     return operasi + 5000;
//   //   }

//   //  }
//   //  hasil = tambah(200);
//   //  hasil = tambah(5000);

//   // //  hasil = tambah(10000);

//   //   return (

//   //     <div className="App">
//   //       <h1>hasil "{hasil}"</h1>

//   //       </div>
//   //   );

//   // let pemenang = "";
//   // function guntingBatuKertas(jawaban_1, jawaban_2) {
//   //   if ((jawaban_1 === "Batu", jawaban_2 === "Batu")) {
//   //     return "Seri";
//   //   } else if ((jawaban_1 === "Batu", jawaban_2 === "Gunting")) {
//   //     return "Batu";
//   //   } else if ((jawaban_1 === "Batu", jawaban_2 === "Kertas")) {
//   //     return "Kertas";
//   //   } else if ((jawaban_1 === "Kertas", jawaban_2 === "Kertas")) {
//   //     return "Seri";
//   //   } else if ((jawaban_1 === "Kertas", jawaban_2 === "Batu")) {
//   //     return "Kertas";
//   //   } else if ((jawaban_1 === "Kertas", jawaban_2 === "Gunting")) {
//   //     return "Gunting";
//   //   } else if ((jawaban_1 === "Gunting", jawaban_2 === "Gunting")) {
//   //     return "Seri";
//   //   } else if ((jawaban_1 === "Gunting", jawaban_2 === "Kertas")) {
//   //     return "Gunting";
//   //   } else if ((jawaban_1 === "Gunting", jawaban_2 === "Batu")) {
//   //     return "Batu";
//   //   } else {
//   //   }
//   //   return (jawaban_1 = jawaban_2);
//   // }

//   // pemenang = guntingBatuKertas("gunting", "batu"); // pemenang = batu
//   // // pemenang = guntingBatuKertas('kertas', 'gunting'); // pemenang = gunting
//   // // pemenang = guntingBatuKertas('batu', 'kertas'); // pemenang = kertas

//   function getData() {
//     // const axios = require("axios");

//     // Make a request for a user with a given ID

//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then(function (response) {
//         // handle success
//         console.log(response);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .finally(function () {
//         // always executed
//       });
//   }

//   getData();

//   return (
//     <div>
//       <ul>
//         <li>List ke 1</li>
//       </ul>
//     </div>
//   );
// }

// export default App;



// function App() {
// 	let bilangan = [2, 4, 1, 90, 6, 53, 6, 12, 96, 15, 77, 14, 71];

// 	let ganjil = [];
// 	let genap = [];
// 	let i =0;
// 	for(i; i <bilangan.length; i++){
// 		if (bilangan[i] % 2 == 0) {
// 			genap.push(bilangan[i]);
// 		}else{
// 			ganjil.push(bilangan[i]);
// 		}
// 	}
// 		console.log(genap);
// 		console.log(ganjil);

// 	return (
// 		<div>
// 			<div>
// 				<p>Bilangan Ganjil:</p>
// 				{ganjil.map((item, index) => {
// 					return <span>{item},</span>;
// 				})}
// 			</div>

// 			<div>
// 				<p>Bilangan Genap:</p>
// 				{genap.map((item, index) => {
// 					return <span>{item},</span>;
// 				})}
// 			</div>
// 		</div>

// 	);
// }
// export default App;

// function App(){
// 	let bilangan =[15, 68, 242, 113, 9, 23, 56, 588, 24242, 13131, 77, 131];
// 	let ganjil=[];
// 	let genap =[];

// 	for (let i=0; i < bilangan.length; i++) {

// 	if (bilangan[i] % 2 === 0) {
// 		genap.push(bilangan[i]);

// 	} else{
// 		ganjil.push(bilangan[i]);
// 	}
// }


// 	console.log(genap);
// 	console.log(ganjil);

// 	return (
// 				<div>
// 					<div>
// 						<p>Bilangan Ganjil:</p>
// 						{ganjil.map((item, index) => {
// 							return <span>{item},</span>;
// 						})}
// 					</div>

// 					<div>
// 						<p>Bilangan Genap:</p>
// 						{genap.map((item, index) => {
// 							return <span>{item},</span>;
// 						})}
// 					</div>
// 				</div>

// 			);
// }
// export default App;





import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


function List() {

	const [DataUser, setDataUser] = useState([]);
	useEffect(() => {
		// Update the document title using the browser API
		getUser();
	}, []);

	function getUser() {
		axios.get('http://127.0.0.1:8000/api/get-user') // 200
			.then(function (response) {
				console.log('response :>> ', response.data);
				setDataUser(response.data)

				// kode yang ada disini bakal di jalanin kalo berhasil dapet sesuatu
			}).catch(function (error) {
				// kode yang ada disini bakal di jalanin kalo tidak berhasil dapet sesuatu
			}).finally(function () {
				// kode yang ada disini bakal di jalanin kalo dia berhasil atau tidak berhasil dapet sesuatu
			});
	}

	function onDelete() {
		axios.delete('http://127.0.0.1:8000/api/delete-user/{id}').then(({data})=>{


		})
		

	}

	return (
		<div>


			<Container className='mt-5'>
				<h2 className='mb-0'>Daftar User</h2>
				<p>Ini adalah user yang terdaftar di sistem.</p>

				<Button variant='success' href='/create' className='horizontal'>Tambah</Button>

				<Table bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Nama</th>
							<th>Email</th>
							<th>Password</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{
							DataUser.map((item, index) => {
								return (
									<tr>
										<td>{index + 1}</td>
										<td>{item.name}</td>
										<td>{item.email}</td>
										<td>{item.password}</td>
										<td>
											<Button variant="primary" className='me-2' href={'/update/'+item.id}>Update</Button>
											<Button variant="danger" className='me-2'onSubmit={()=>onDelete(item.id)} href='/'>Delete</Button>

										</td>
									</tr>

								)

							})

						}

					</tbody>
				</Table>
			</Container>

		</div>
	);
}

export default List;

