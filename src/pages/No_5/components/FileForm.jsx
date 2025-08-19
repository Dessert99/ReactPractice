import styled from 'styled-components';
import { useState } from 'react';
import { feeadbackUpload } from '../api/upload';
const Form = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Box = styled.div`
  height: ${({ $height }) => $height};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
const FileLable = styled.label`
  height: 18rem;
  width: 18rem;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddImg = styled.div`
  width: 7rem;
  height: 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  color: var(--grey, #888);

  border: 1.5px dashed var(--grey, #888);
`;

const PrevImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; // 비율 유지
`;

const Title = styled.span`
  font-weight: bold;
  margin-left: 1rem;
  font-size: 0.7rem;
`;

const UploadButton = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 1rem;
  color: wheat;
  background-color: green;
  border-radius: 10px;
  font-weight: bold;
`;

const FileForm = () => {
  const [preview, setPreview] = useState(null); //  미리보기용 상태

  //업로드 핸들러
  const handSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const img = e.currentTarget.elements.File_img.files[0]; //폼 안의 <input name="File_img">를 통해 파일 얻기

    //폼 데이터 구성
    formData.append('walktrail', 2);
    formData.append('location', '테스트 중');
    formData.append('type', '제안');
    formData.append('category', '도로');
    formData.append('latitude', 37.5935);
    formData.append('longitude', 127.0455);
    formData.append('feedback_content', ' 발판이 고르고 않아 미끄러워요.\n비 오는 날 특히 위험해서 정비가 필요합니다.');
    formData.append('feedback_image', img); // 이미지 파일

    try {
      const res = await feeadbackUpload(formData);
      console.log('업로드 성공:', res);
    } catch (e) {
      console.error(e);
    }
  };

  // 미리보기 핸들러
  const handlePrev = (e) => {
    const img = e.target.files[0]; //File 객체(= Blob) 1) 바이너리 파일이다. 2) FormData로 보낼 땐 이걸 그대로 넣는다.
    const reader = new FileReader();
    reader.readAsDataURL(img); // 파일을 Data URL 문자열로 변환. -> 비동기 작업
    reader.onload = () => setPreview(reader.result); // //Data URL(문자열) : "data:image/jpeg;base64,/9j/4AAQSkZJRg... (생략)"
  };
  return (
    <Form onSubmit={handSubmit}>
      <Box $height="20rem">
        <Title>After</Title>
        <FileLable>
          <input
            type="file"
            accept="image/*"
            name="File_img"
            onChange={(e) => handlePrev(e)}
            style={{ display: 'none' }}
          />
          {preview ? <PrevImg src={preview} alt="" /> : <AddImg>+</AddImg>}
        </FileLable>
      </Box>

      <UploadButton type="submit">업로드</UploadButton>
    </Form>
  );
};

export default FileForm;
