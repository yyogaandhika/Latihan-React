export default function HelloWorld(){
    const propsUserCard = {
        nama: "Guts",
        nim: "696",
        tanggal: "2025-03-14"
    }
    return(
        <div className="card">
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama = "Mhd. Yoga Andhika"
            nim = "2355301114"
            tanggal = {new Date().toLocaleDateString()}/>
            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr />
            <h3>Nama : {props.nama}</h3>
            <p>NIM : {props.nim}</p>
            <p>Tanggal : {props.tanggal}</p>
        </div>
    )
}