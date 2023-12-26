import CreateForm from '../../components/CreateForm/CreateForm';
import CreateGuide from '../../components/CreateGuide/CreateGuide';
import CreateHeader from '../../components/CreateHeader/CreateHeader';
import Preview from '../../components/Preview/Preview';

function CreatePost() {
  return (
    <>
      <CreateHeader />
      <main>
        <CreateGuide />
        <CreateForm />
        <Preview />
      </main>
    </>
  );
}

export default CreatePost;
