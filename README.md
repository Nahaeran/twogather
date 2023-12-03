# **공간 대여 플랫폼 TWOGATHER**

![image](https://user-images.githubusercontent.com/73158122/182601882-9009c51f-b8d3-4b14-90af-d913a021b02b.png)

### 서비스 링크

~~http://34.64.86.202/~~

### 서비스 시연 영상

https://www.youtube.com/watch?v=al_ei550YEs
<br>
<img src="https://user-images.githubusercontent.com/73158122/185178362-e00a1d82-f398-4c8e-b908-fecf6ac54b56.gif" width="70%"/>

<br>

### 1. 서비스 소개

- 목표<br/>
  **Host와 Guest의 계정 구분 없이 공간 대여와 제공을 동시에 할 수 있는 프로슈머(Prosumer) 서비스를 제공한다.**

  - 회원가입, 로그인, 호스트 등록 기능을 제공한다.
  - 마이 페이지에서 나의 정보와 예약내역, Q&A, 리뷰를 조회/등록/수정이 가능하다.
  - Host가 계정을 생성한 뒤 공간(Space)를 등록한다.
  - 등록한 공간(Space)에 대한 상세 룸(Room)을 등록한다.
  - 여러가지 검색 옵션을 이용해 룸(Room)을 필터링하여 조회할 수 있다.
  - Guest는 검색한 룸(Room)을 시간당 금액과 이용 가능한 시간대를 확인한 후 예약할 수 있다.
  - Host 또한 Guest로서 이용하고자 하는 룸(Room)을 예약할 수 있다.
  - 리뷰, Q&A를 이용해 Host와 Guest가 소통한다.
  - 전체 유저 조회 등 관리자 기능을 제공한다.
  - 관리자(홈페이지) Host와 Guest에게 홈페이지 이용에 대한 공지사항을 할 수 있다.

- 기획의도<br/>
  - **Prosumer가 되고 싶어하지 않을까?**<br/>
    다양한 형태의 공간 쉐어링이 보편화된 요즘, 공간 호스팅이 가능한 서비스들은 많다. 기존 서비스들은 호스트로서 공간을 등록하기도 하지만,
    그 호스트가 Guest가 되어 쓰고 싶은 방을 예약하려면 게스트와 호스트 계정을 따로 생성해야 하고, 불필요하게 계정이 많아지면 관리해야 할 데이터의 양도 늘어난다.
    이와 같은 형태의 비즈니스의 사용자 경험과 리소스 관리 측면을 고려하여 게스트와 동시에 호스트가 될 수 있는 TWOGATHER를 기획하였다.

### 2. 웹 서비스의 주제 및 기능 설명

- 주제: 공간 대여 플랫폼

- 기능
  #### 1️⃣ 회원가입, 로그인, 로그아웃
  - 카카오 소셜 회원가입 및 로그인
  - 로그인 시 유저 권한에 따라 페이지 접근
  - 비밀번호 분실 시, 가입한 이메일로 임시 비밀번호 발송
  #### 2️⃣ 마이페이지
  - 내 정보 수정 및 프로필 사진 등록
  - 내 예약 내역
  - 내가 작성한 리뷰 및 Q&A 목록
  #### 3️⃣ 공간 조회
  - 지역, 공간유형, 공간명, 해시태그 등 키워드로 공간 검색
  - 등록순, 가격순 등 공간 조회 필터링
  #### 4️⃣ 공간 예약
  - 공간 이미지 슬라이드
  - 공간 설명 및 지도
  - 날짜별 예약 불가능한 시간대 필터링
  - 시간대별 룸 예약
  #### 5️⃣ 공간 호스팅
  - 호스트 등록
  - 공간/룸 등록 및 수정, 삭제
  - 내 공간 예약 내역 관리
  - 내 공간 리뷰 및 Q&A 관리
  #### 6️⃣ 관리자
  - 유저 관리
  - 전체 예약 내역 관리
  - 공지사항

### 3. 프로젝트만의 차별점, 기대 효과

- 기존 서비스의 단점 -> 본 프로젝트의 장점  
  기존 서비스는 공간 호스팅을 하려면 호스트 계정을 따로 생성해야하는 번거로움이 있었음.  
  → 본 프로젝트는 호스트 계정을 따로 생성할 필요 없이 일반 유저도 호스트 등록만 하면 공간 호스팅이 가능  
  → 호스팅 접근성 상승

- 본 웹서비스의 사용자가 경험할 효과 및 장점  
  다양한 필터와 검색을 통해 편리하게 공간 검색 가능  
  복잡한 로그인 없이 계정 하나로 공간 호스팅과 공간 대여 예약 가능

### 4. 제작 기간, 구성원 역할
- 제작 기간: 22.07.04 ~ 22.07.24

| 이름   | 역할       | 구현 기능                                                                                                                        |
| ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 강예정 | 프론트엔드 | 공간,룸 CRUD, 유저목록                                                                                                           |
| 김미지 | 프론트엔드 | 공간 상세, 공간 예약, 호스트/어드민 예약관리, 호스트 Q&A 관리, 해시태그                                                           |
| 나해란 | 프론트엔드 | 홈, 공간 목록, 공지사항 CRUD, 공간 해시태그 검색                                                                                                          |
| 남연진 | 프론트엔드 | 로그인, 로그아웃, 회원가입, 마이페이지, 리뷰, Q&A                                                                                |
| 김태훈 | 백엔드     | EC2 MySQL 서버 생성 및 관리, 관계형 DB 모델링 및 ERD 작성, REST API 개발 및 Swagger 문서 작성, 인증/인가 구현, Slack Git 연동 등 |
| 장종원 | 백엔드     | EC2 Jenkins(CI&CD), DB 구축 및 REST API 개발, API Document(Swagger), AWS S3(lambda)                                              |

### 5. 기술 스택

- 프론트엔드
  - React
  - JavaScript
  - Styled-components
  - Axios
- 백엔드
  - TypeScript
  - 프레임 워크: Nest
  - DB: MySQL, typeORM
  - DevOps: Jenkins, AWS EC2, S3(lambda)
  - 기타 협업 도구 : Swagger, Postman, Slack
    <br/>
    <img src="https://user-images.githubusercontent.com/73158122/182604635-4b71a100-89f7-4680-9959-afafa50075f1.png" width="60%">

### 6. 프로젝트 구조도

- 로그인
  <img src="https://user-images.githubusercontent.com/73158122/182605645-047b1676-e240-4462-8bb7-64ad38403458.png" width="60%">
- 예약 등록
  <img src="https://user-images.githubusercontent.com/73158122/182605691-a9bac9f0-9a68-4e9c-bc3a-53ee19bda423.png" width="60%">

- <a href="https://www.figma.com/file/11R0lkBAQmi4Pv2Js7fkUX/Twogather?node-id=0%3A1">Figma</a>
  <img width="1187" alt="figma" src="https://user-images.githubusercontent.com/73158122/182605839-ebb468b9-ef27-4947-a31b-047fb06ec267.png">

### 7. 페이지별 화면

|  |  |
| :-------------------------------------------: | :-------------------------------------------: |
| 메인                                                                                                                     | 공간 조회                                                                                                                |
| ![메인](https://user-images.githubusercontent.com/73158122/182607341-4ae842fd-2e67-450d-8529-bf6ad7891f18.png)           | ![공간 조회](https://user-images.githubusercontent.com/73158122/182607614-8760093b-4055-45b2-95be-bb118afcbdd9.png)      |
| 공간 상세                                                                                                                | 예약                                                                                                                     |
| ![공간 상세](https://user-images.githubusercontent.com/73158122/182608629-7390e516-2618-4e9f-aaa4-81fd31c4b833.png)      | ![예약](https://user-images.githubusercontent.com/73158122/182609364-4b3a7517-5a3c-42ea-88ae-ddc6a5ed7ac1.png)           |
| 회원가입                                                                                                                 | 로그인                                                                                                                   |
| ![회원가입](https://user-images.githubusercontent.com/73158122/182608983-c954a0ab-9a6a-4396-b1ca-8bc8af30e7eb.png)       | ![로그인](https://user-images.githubusercontent.com/73158122/182609022-b6ed075b-9cad-4954-855d-092a01cb9387.png)         |
| 마이 페이지                                                                                                              |                                                                                                                          |
| ![마이페이지](https://user-images.githubusercontent.com/73158122/182609618-00bd2cbc-22f3-4379-9818-7da8eb0c26c7.png)     |                                                                                                                          |
| 리뷰 등록                                                                                                                | Q&A 등록                                                                                                                 |
| ![리뷰](https://user-images.githubusercontent.com/73158122/182609926-3b6d2132-f3a9-480d-9006-adbc395f8c33.png)           | ![QNA](https://user-images.githubusercontent.com/73158122/182610356-55bc5b24-e980-4b08-9f41-7b9f4bd9f3a3.png)            |
| 호스트로 등록                                                                                                            | 호스트 공간 관리                                                                                                         |
| ![호스트 등록](https://user-images.githubusercontent.com/73158122/182611624-fb2d0684-3b2c-4436-9f10-579060da882c.png)    | ![공간 등록](https://user-images.githubusercontent.com/73158122/182611720-65ce7535-dc57-4bc2-aec9-16aa315cb050.png)      |
| 호스트 공간 등록                                                                                                         | 호스트 룸 등록                                                                                                           |
| ![공간 등록](https://user-images.githubusercontent.com/73158122/182612450-154aadf6-9079-4189-848f-b545b58dc229.png)      | ![룸 등록](https://user-images.githubusercontent.com/73158122/182612479-e2e70a95-678e-44a3-b353-e080aad66017.png)        |
| 예약 관리                                                                                                                | 예약 내역 상세                                                                                                           |
| ![예약관리2](https://user-images.githubusercontent.com/73158122/182612694-eef2c1ad-7fc7-4211-88f2-84030f990dc2.png)      | ![예약 내역 상세](https://user-images.githubusercontent.com/73158122/182612885-8bc57a3a-c788-40ee-8523-63d6b827e9c7.png) |
| Q&A 관리                                                                                                                 |                                                                                                                          |
| ![answer 등록](https://user-images.githubusercontent.com/73158122/182613750-350fc62c-41eb-4148-955a-d8276f09d184.png)    |                                                                                                                          |
| 공지사항                                                                                                                 | 유저 관리                                                                                                                |
| ![공지사항](https://user-images.githubusercontent.com/73158122/182614627-d75375a3-c621-46d0-a0c6-5fe1d5bcfe0a.png)       | ![유저 관리](https://user-images.githubusercontent.com/73158122/182615003-71bc9ac7-955d-4456-b975-12407531da3d.png)      |
| 전체 예약 관리                                                                                                           |                                                                                                                          |
| ![전체 예약 관리](https://user-images.githubusercontent.com/73158122/182614745-c4ab9758-cdd0-4963-8945-bb4327e8b158.png) |                                                                                                                          |
