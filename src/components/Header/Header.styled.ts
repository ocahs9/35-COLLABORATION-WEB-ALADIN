import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 19.5rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0 0 30px 0 rgb(0 0 0 / 8%);
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke_gray20};
  gap: 12rem;
`;

export const HeaderTopCategoryLayout = styled.div`
  display: flex;
  padding: 1rem 0;
  max-width: 83.9rem;
  align-items: center;
  gap: 0.7rem;
`;

export const CategoryDiv = styled.div<{ $isMain: boolean }>`
  display: flex;
  width: 5.9rem;
  height: 3rem;
  padding: 0 0.7rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  ${({ theme }) => theme.fonts.body5_b_13};
  color: ${({ $isMain, theme }) =>
    $isMain ? theme.colors.purple50 : theme.colors.ic_gray10};
  white-space: nowrap;

  &:hover {
    color: ${({ theme, $isMain }) => !$isMain && theme.colors.purple40};
  }
`;

export const HeaderTopUserLayout = styled.div`
  display: flex;
  min-width: 18rem;
  padding: 1rem 0;
  align-items: center;
  gap: 0.7rem;
`;

export const UserOptionDiv = styled.div`
  display: flex;
  width: 4.8rem;
  height: 3rem;
  padding: 0 0.7rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.ic_gray10};
  white-space: nowrap;
  ${({ theme }) => theme.fonts.body5_b_13};
`;

export const HeaderSearch = styled.div`
  display: flex;
  max-width: 103rem;
  height: 9rem;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSearchLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const HeaderSearchLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const HeaderSearchBox = styled.div`
  display: flex;
  width: 52.6rem;
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.purple50};
  border-radius: 3rem;
  background: ${({ theme }) => theme.colors.white};
  justify-content: flex-start;
  align-items: center;
`;

export const SearchBoxLeftBtn = styled.button`
  display: flex;
  width: 6.1rem;
  margin-left: 1.3rem;

  color: ${({ theme }) => theme.colors.purple50};
  ${({ theme }) => theme.fonts.body5_b_13};
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
`;

export const SearchPlaceHolder = styled.span`
  margin-left: 1.3rem;

  color: ${({ theme }) => theme.colors.stroke_gray40};
  ${({ theme }) => theme.fonts.body5_r_13};
`;

export const SearchHeaderRightBox = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  gap: 0.3rem;

  color: ${({ theme }) => theme.colors.text_gray10};
  ${({ theme }) => theme.fonts.caption2_b_11};
`;

export const HeaderSearchRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 24.4rem;
`;

export const HeaderRightItem = styled.div`
  display: flex;
  width: 4rem;
  height: 4rem;
  padding: 0.3rem;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple50};
  }

  &:hover svg g {
    stroke: white;
  }

  cursor: pointer;
`;

export const HeaderBottom = styled.div`
  display: flex;
  width: 103rem;
  height: 4.5rem;
  padding: 10px 0 15px;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
`;

export const SeeBtn = styled.button`
  display: flex;
  height: 3rem;
  padding: 0 0.7rem;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.body5_b_13};
`;

export const HeaderBottomItemLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1 0 0;
`;

export const HeaderBottomItem = styled.div`
  display: flex;
  height: 3rem;
  padding: 0 0.7rem;
  align-items: center;
  gap: 0.1rem;

  color: ${({ theme }) => theme.colors.text_gray10};
  white-space: nowrap;
  ${({ theme }) => theme.fonts.body5_b_13};
`;
