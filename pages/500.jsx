import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Bu bir server hatası gibi görünüyor..."} />
}

export default UnkownPage;
