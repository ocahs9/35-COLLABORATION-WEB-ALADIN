import styled from "@emotion/styled";
import theme from "@styles/theme";

export const AddressInfoContainer = styled.div`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.stroke_gray10};
    padding: 1rem 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    max-width: 25rem;
    border-radius: 10px;
    color: ${theme.colors.text_gray40};
`;


export const DeliveryLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    ${theme.fonts.body7_b_12};
`;

export const DeleveryType = styled.span`
    ${theme.fonts.body10_sb_11};
    color: ${theme.colors.purple50};
`;

export const AddressBox = styled.div`
    ${theme.fonts.body10_sb_11};
    display: flex;
    align-items: center;
    gap: 3.5rem;
`;
