import styled from '@emotion/styled';

export const Section6CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 7rem 0 10.5rem 16.8rem;
`;

export const Section6TitleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const Section6CardLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  overflow-x: scroll;
  scrollbar-width: none;

  & > div:last-child {
    padding-right: 16.8rem;
  }
`;

export const Section6CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardLabel = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.8rem;
  padding: 1rem 1.2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.tp_white50};

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.body1_b_15};
`;
