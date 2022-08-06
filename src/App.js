import { useEffect, useState } from 'react';
import UploadModal from './components/uploadModal/uploadModal';
import FileList from './components/fileList/fileList';
import './App.css';
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';

const App = () => {
	const [ files, setFiles ] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const removeFile = (fileName) => {
		setFiles(files.filter((file) => file.publicId !== fileName));
	};

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BE_ROUTE}/gallery`)
    .then((res) => {
      console.log(res);
      if(res.data?.result){
        res.data?.gallary?.forEach(element => {
          let file = {};
          file.name = element[1].substring(element[1].lastIndexOf("/")+1, element[1].length);
          file.imageUrl = element[1];
          file.publicId = element[0];
          setFiles([...files, file])
        });
      }
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);

	return (
		<div className="App">
			<div className="App-header">
				<div>
					<h3><b>DROP ME</b></h3>
					<small>Drag and drop files to upload </small>
				</div>
				<button className="upload-button" onClick={onOpen}>
					UPLOAD FILE
				</button>
			</div>
			<UploadModal files={files} setFiles={setFiles} removeFile={removeFile} isOpen={isOpen} onClose={onClose} />
			<FileList files={files} removeFile={removeFile} />
			<footer className="App-footer" />
		</div>
	);
};

export default App;
