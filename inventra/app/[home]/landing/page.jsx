export default function Landing() {
    return (
        <>
            <Image
                src="/../public/imgLanding.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <>
                <p>{userStatus}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quas quibusdam doloribus? A doloremque excepturi, recusandae ipsum beatae eos adipisci delectus. Sed et asperiores fuga, rem harum autem doloribus assumenda.</p>
                <button onClick={() => setUserStatus('si')}>continuar</button>
            </>
        </>
    )
}