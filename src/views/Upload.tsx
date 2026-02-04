import {useState} from 'react';
import useForm from '../hooks/formHooks';
import {useFile, useMedia} from '../hooks/apiHooks';

const Upload = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();

  const initValues = {title: '', description: ''};

  const doUpload = async () => {
    const token = localStorage.getItem('token');
    if (!file || !token) {
      console.log('doUpload file or token falsy');
      return;
    }
    setUploading(true);
    try {
      const uploadResponse = await postFile(file, token);
      console.log('file upload response', uploadResponse);
      const mediaResponse = await postMedia(uploadResponse, inputs, token);
      console.log('postMedia response', mediaResponse);
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const {handleInputChange, handleSubmit, inputs} = useForm(
    doUpload,
    initValues,
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.files);
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placehold.co/320x240?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
      {uploading && <p>Uploading...</p>}
    </>
  );
};

export default Upload;
