# microservice_architect

## Monolithic Architecture

<img width="568" alt="스크린샷 2023-01-06 오후 8 45 51" src="https://user-images.githubusercontent.com/80687195/211006410-e38c7985-a056-4556-aabb-1d4c7c283c4d.png">


### 장점

- 단순한 구조
- 개발환경과 방법의 통일성
- 배포가 간편
- End to End 테스트가 쉬움

### 단점
- 프로젝트의 규모가 커질수록 복잡도가 심각하게 증가
- 코드 전체를 이해하기 힘듬
- 빌드시간의 증가(CI/CD 불가능)
- 새로운 기술을 적용하려면 프로젝트를 다 뜯어고쳐야 할 수 있음

## MicroService Architecture
---
이런 기존 아키텍처의 단점을 보완하고자 나온 여러 아키텍처 중 하나가 `MicroService Architecture`이다.
이름에서부터 알수있듯이, 작은 서비스 여러개가 모여서 하나의 시스템을 제공하는 아키텍처를 뜻한다.

`MicroService Architecture`에서 각 서비스는 작고 독립적이며 느슨하게 결합되어 있다.
때문에 서비스들을 독립적으로 배포할 수 있으며, 전체 프로그램을 빌드한 뒤에 재배치하지 않고도 기존 서비스들을
업데이트 할 수 있습니다.

서비스들이 독립적이라는 특징덕에 클라우드와 컨테이너와 잘 어울리는 아키텍처이기도 합니다.

<img width="744" alt="스크린샷 2023-01-06 오후 8 46 07" src="https://user-images.githubusercontent.com/80687195/211006420-93529f59-46b3-4361-8622-c32ff09127d6.png">

### 장점
- 전체프로그램을 다시 배포하지 않고도 업데이트가 가능
- 독립적으로 개발가능
- 서비스 하나가 다운되더라도 전체 서비스에 영향을 끼치지 않음
- 서비스를 독립적으로 확장가능, 리소스의 유연한 운용 가능

### 단점
- 서비스간 통신방법이 필요하고 복잡함
- 서비스끼리의 테스트가 어려움
- 복잡하고 독립된 구조로 인해 통합적인 유지관리가 어려워질 수 있음

## Why MSA?

`MicroService Architecture`가 클라우드환경과 찰떡궁합이기 때문이다.

잠시 Monolithic구조를 다시 살펴보면 각각의 모듈들이 합쳐져 큰덩어리로 시스템이 구축되어 있다.

사용량이 적은 모듈을 삭제한다고 하더라도 전체 시스템의 스펙은 변하지 않기 때문에 사용량단위로 과급을 해야

해야하는 cloud환경에서는 비효율적이다.

하지만 MicroService구조는 서비스 단위로 기능을 분리해서 구축할 수 있기 때문에, 사용하지 않는 기능 또는 사용량이
적은 기능을 축소해서 효율화시킬 수 있다.

비용면에서는 클라우드환경에서 MSA가 압습이지만 모든 것이 완벽하지는 않는다.

새끼서비스들도 늘어나게되고 관리해야할 포인트가 증가하기 되는 단점도 존재하다.

그럼에도 불구하고 서비스들의 재사용성, 클라우드환경에 친화적이라는 장점이 있다.

<img width="1072" alt="스크린샷 2023-01-07 오후 12 33 53" src="https://user-images.githubusercontent.com/80687195/211130049-3199ac29-aad5-430c-85af-0801d09f8cef.png">
<img width="1067" alt="스크린샷 2023-01-07 오후 12 34 58" src="https://user-images.githubusercontent.com/80687195/211130052-13ab421d-e079-4a44-b3a6-03d62838926c.png">
<img width="1064" alt="스크린샷 2023-01-07 오후 12 35 11" src="https://user-images.githubusercontent.com/80687195/211130056-2cf4be0c-875f-4be9-a04a-bc70dccd0c34.png">

<img width="1069" alt="스크린샷 2023-01-07 오후 12 35 21" src="https://user-images.githubusercontent.com/80687195/211130059-07845ef9-3757-4aa4-a8f7-74271a55f960.png">
<img width="1069" alt="스크린샷 2023-01-07 오후 12 36 25" src="https://user-images.githubusercontent.com/80687195/211130065-21c2aa41-a7e1-4f4a-a981-7c874fab37a8.png">
<img width="1440" alt="스크린샷 2023-01-07 오후 12 48 05" src="https://user-images.githubusercontent.com/80687195/211130068-fd9b2fd2-7b52-483a-8237-a0512b5e605f.png">
<img width="1440" alt="스크린샷 2023-01-07 오후 12 48 03" src="https://user-images.githubusercontent.com/80687195/211130071-631a7bc6-06cf-4831-b38b-9bd9828e79fb.png">
<img width="1067" alt="스크린샷 2023-01-07 오후 12 39 47" src="https://user-images.githubusercontent.com/80687195/211130075-a3aa4c92-e35f-46a7-b21f-532dd522d75c.png">
<img width="1060" alt="스크린샷 2023-01-07 오후 12 38 23" src="https://user-images.githubusercontent.com/80687195/211130076-e42f5288-c3b7-4dd2-a54a-170140e0c034.png">
<img width="1071" alt="스크린샷 2023-01-07 오후 12 38 08" src="https://user-images.githubusercontent.com/80687195/211130078-11d9452a-cd66-476e-9e2d-e3e5b7f5cd7a.png">
<img width="1072" alt="스크린샷 2023-01-07 오후 12 37 48" src="https://user-images.githubusercontent.com/80687195/211130080-f2020d9f-0043-4554-8def-2de46fd59591.png">
<img width="1440" alt="스크린샷 2023-01-07 오후 12 52 36" src="https://user-images.githubusercontent.com/80687195/211130083-bb8d9c27-1bb4-4165-ab7a-e4ed2aa1ffd5.png">
<img width="1440" alt="스크린샷 2023-01-07 오후 12 49 58" src="https://user-images.githubusercontent.com/80687195/211130085-d1c3dc76-b8ea-4fdb-bae2-791743635564.png">
<img width="1440" alt="스크린샷 2023-01-07 오후 12 49 10" src="https://user-images.githubusercontent.com/80687195/211130086-9c95d40b-368e-4a6f-8e5c-6199dd554c75.png">
<img width="1440" alt="스크린샷 2023-01-07 오후 12 48 47" src="https://user-images.githubusercontent.com/80687195/211130087-8434b351-2752-4445-a469-d25be167f4db.png">
<img width="1440" alt="스크린샷 2023-01-07 오후 12 48 39" src="https://user-images.githubusercontent.com/80687195/211130088-cfeca9c3-3122-419c-b26d-8987de90b485.png">

