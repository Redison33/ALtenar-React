import { useState } from 'react';
import {
  LoadingWrap,
  LoadingInput,
  LoadingTextOne,
  LoadingTextTwo,
  LoadingTextThree,
  LoadingTextOneFile,
  LoadingTextTwoFile,
  LoadingButton,
  LoadingErrorText,
  LoadingProgress,
} from './LoadingStyle';
import { useForm } from '../../state/storeForm';

function Loading() {
  const state = useForm();

  const [imgName, setImgName] = useState('');
  const [imgWidth, setImgWidth] = useState('');
  const [imgHeight, setImgHeight] = useState('');
  const [imgError, setImgError] = useState(false);
  const [imgProgress, setImgProgress] = useState(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setImgName(file.name);
    const minSize = 1241;
    console.log(file);
    if (file) {
      const reader = new FileReader();

      reader.onprogress = (e) => {
        const percentComplete = (e.loaded / e.total) * 100;
        setImgProgress(percentComplete);
        // setInterval(setImgProgress, 1000, 20);
      };
      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result as string;
        image.onload = () => {
          setImgWidth(image.width.toString());
          setImgHeight(image.height.toString());
          if (minSize < image.width || minSize < image.height) {
            setImgError(false);
            state.setFile(image.src);
          } else {
            setImgError(true);
            state.setFile('');
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteFile = (e: any) => {
    e.preventDefault();
    state.setFile('');
  };
  return (
    <LoadingWrap
      htmlFor="file"
      $FileTarget={state.file ? state.file.toString() : ''}
      $Error={imgError}>
      <LoadingInput
        type="file"
        id="file"
        onChange={(e) => {
          onChange(e);
        }}
      />
      {imgError && <LoadingErrorText>Слишком маленький размер изображения</LoadingErrorText>}
      {state.file && !imgError ? (
        <>
          <img src={state.file} alt="" />
          <LoadingButton onClick={(e) => deleteFile(e)}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_24_8136)">
                <path
                  d="M9 1.5C4.8525 1.5 1.5 4.8525 1.5 9C1.5 13.1475 4.8525 16.5 9 16.5C13.1475 16.5 16.5 13.1475 16.5 9C16.5 4.8525 13.1475 1.5 9 1.5ZM12.75 11.6925L11.6925 12.75L9 10.0575L6.3075 12.75L5.25 11.6925L7.9425 9L5.25 6.3075L6.3075 5.25L9 7.9425L11.6925 5.25L12.75 6.3075L10.0575 9L12.75 11.6925Z"
                  fill="black"
                  fillOpacity="0.23"
                />
              </g>
              <defs>
                <clipPath id="clip0_24_8136">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </LoadingButton>
          <div>
            <LoadingTextOneFile>{imgName}</LoadingTextOneFile>
            <LoadingTextTwoFile>Размер: {`${imgWidth} x ${imgHeight}`} px</LoadingTextTwoFile>
          </div>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="38"
            viewBox="0 0 31 38"
            fill="none">
            <g clipPath="url(#clip0_21_8392)">
              <path
                d="M31 9.91846L21.3142 0.0049438V0.0043945H21.3137L21.3094 0L21.3049 0.0043945H3.14592C1.41116 0.0043945 0 1.42676 0 3.1748V34.6187C0 36.3667 1.41116 37.7896 3.14592 37.7896H27.8541C29.5884 37.7896 30.999 36.3667 30.999 34.6187V9.91943L31 9.91846ZM28.1812 9.88452L21.2919 9.80273L21.3077 2.84949L28.1812 9.88452ZM29.0148 34.6187C29.0148 35.2642 28.4945 35.7896 27.8541 35.7896H3.14592C2.5055 35.7896 1.98425 35.2642 1.98425 34.6187V3.1748C1.98425 2.5293 2.5055 2.00439 3.14592 2.00439H19.3261L19.3038 11.7793L29.0148 11.8945V34.6187Z"
                fill="black"
                fillOpacity="0.54"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_8392">
                <rect width="31" height="37.7896" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            <LoadingTextOne>
              Перетащите файл или <LoadingTextTwo>загрузите с компьютера</LoadingTextTwo>
            </LoadingTextOne>
            <LoadingTextThree>Соотношение 1:1. Минимальный размер 1242х1242 px</LoadingTextThree>
          </div>
        </>
      )}
      {!imgError && imgProgress < 100 && imgProgress > 0 && (
        <LoadingProgress value={imgProgress} max={100}></LoadingProgress>
      )}
    </LoadingWrap>
  );
}
export default Loading;
