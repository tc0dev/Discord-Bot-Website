import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunumu Kaybettin Kanka?',
        'Lanet Olsun! Burası Yolun Sonu...',
        'Allaha Şükret Belki Açılır :)'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

