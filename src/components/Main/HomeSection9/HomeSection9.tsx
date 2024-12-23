import * as S from './HomeSection9.styled';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';
import SvgImg91 from '@assets/svgs/Img91';
import SvgImg92 from '@assets/svgs/Img92';
import SvgImg93 from '@assets/svgs/Img93';
import SvgImg94 from '@assets/svgs/Img94';
import SvgImg95 from '@assets/svgs/Img95';
import SvgHomeSection2Indicator from '@assets/svgs/HomeSection2Indicator';

const HomeSection9 = () => {
  const cardData = [
    {
      id: 1,
      img: <SvgImg91 />,
      name: '흑백 장르전',
      info: '정혜연, 범유진, 김청귤, 현찬양',
    },
    {
      id: 2,
      img: <SvgImg92 />,
      name: 'GL 기획전',
      info: '매주 릴레이 무료 공개!',
    },
    {
      id: 3,
      img: <SvgImg93 />,
      name: '단행본이라는 뉴미디어',
      info: '장강명',
    },
    {
      id: 4,
      img: <SvgImg94 />,
      name: '여자말씨의 내력',
      info: '후미코',
    },
    {
      id: 5,
      img: <SvgImg95 />,
      name: '<룩 백> 감상',
      info: '주간 무협',
    },
  ];
  return (
    <>
      <S.Section8>
        <S.Section8Wrapper>
          <S.Section8Layout>
            <ArrowLeftButton />
            <S.TitleCard>
              <S.Title>TO BE CONTINUED...추천 노트</S.Title>
              <S.Card>
                {cardData.map((card, id) => (
                  <S.CardLayout key={id}>
                    <S.CardImg>{card.img}</S.CardImg>
                    <S.CardNameInfo>
                      <S.CardName>{card.name}</S.CardName>
                      <S.CardInfo>{card.info}</S.CardInfo>
                    </S.CardNameInfo>
                  </S.CardLayout>
                ))}
              </S.Card>
            </S.TitleCard>
            <ArrowRightButton />
          </S.Section8Layout>
        </S.Section8Wrapper>
        <SvgHomeSection2Indicator />
      </S.Section8>
    </>
  );
};

export default HomeSection9;
