import React from 'react';
import PropTypes from 'prop-types';

import getImageSizes from '../../../helpers/getImageSizes';
import formatStr from './../../../helpers/formatStr';

const FileUpload = props => {
  const { setFile, setIsValidFile, isRequired = false, className = '' } = props;
  const [fileName, setFileName] = React.useState(null);
  const [isError, setIsError] = React.useState(false);
  const [errors, setError] = React.useState([]);

  React.useEffect(() => {
    const savedFileName = window.sessionStorage.getItem('file-name');

    if (savedFileName) {
      setFileName(savedFileName);
    }
  }, []);

  const fileInputHanlder = event => {
    const errorMessages = [];
    const currentFile = event.target.files[0];
    let currentImage = true;

    setFileName(currentFile?.name || '');

    if (fileName && currentFile?.size > 5242880) {
      errorMessages.push('Фотография должна быть размером не более 5 МБ');
      currentImage = false;
      setIsError(true);
    }

    if (
      fileName &&
      currentFile?.type !== 'image/jpeg' &&
      currentFile?.type !== 'image/jpg'
    ) {
      errorMessages.push('Фотография должна быть в формате jpg / jpeg');
      currentImage = false;
      setIsError(true);
    }

    if (currentImage) {
      getImageSizes(currentFile, (file, sizes) => {
        if (sizes.width < 70 || sizes.height < 70) {
          errorMessages.push(
            'Разрешение фотографии должно быть не менее 70 x 70 px'
          );
          setError([...errorMessages]);
          setIsError(true);
        } else {
          setFile(file);
          setIsValidFile(true);

          // window.sessionStorage.setItem('file-name', file.name);
          // window.sessionStorage.setItem('file-url', URL.createObjectURL(file));
        }
      });
    }

    if (errorMessages.length > 0) {
      setError([...errorMessages]);
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <label className={`file-upload ${className}`}>
      <input
        type="file"
        onChange={fileInputHanlder}
        accept="image/jpg, image/jpeg"
        className={isError ? 'error' : ''}
        required={isRequired}
      />
      <span className="file-upload__btn">
        {fileName
          ? `${formatStr(fileName, 14)}.${fileName.slice(-3)}`
          : 'Upload your photo'}
      </span>
      <span className="file-upload__helper-text">
        {isError ? errors.join('. ') : ''}
      </span>
    </label>
  );
};

FileUpload.propTypes = {
  setFile: PropTypes.func.isRequired,
  setIsValidFile: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

export default FileUpload;
