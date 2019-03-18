import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<link rel="stylesheet" href="/_next/static/style.css" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Quicksand|Roboto+Slab:300|Josefin+Slab:600" rel="stylesheet"/>
					<link 
						rel="stylesheet" 
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" 
						integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" 
						crossOrigin="anonymous" 
					/>
				</Head>
				<title>Cleve-Tooth Denture Clinic</title>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}