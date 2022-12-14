import './card.css';
import { CloseButton, Progress, useDisclosure } from '@chakra-ui/react';
import MediaViewer from '../mediaViewer/mediaViewer';

const FileCard = ({ file, deleteFile }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div className="card">
			<CloseButton onClick={() => deleteFile(file.publicId)} />
			<div className="image-container">
				<img src={file.imageUrl} alt="" onClick={onOpen} />
			</div>
			{file.isUploading && <Progress size="xs" backgroundColor="black" colorScheme="green" isIndeterminate />}
			<div className="text-container">
				<h4>
					<small>{file.name}</small>
				</h4>
			</div>
			<MediaViewer imageSrc={file.imageUrl} fileName={file.name} isOpen={isOpen} onClose={onClose} />
		</div>
	);
};

export default FileCard;
