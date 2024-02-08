import { BandNavListProps, StudioNavListProps } from "./pageNavigation/types";

export type lyrics = {
   lyrics: string;
};

export interface HeaderTemplateProps {
   bandPage: boolean;
   lyrics: string;
   NavList: React.FC<BandNavListProps> | React.FC<StudioNavListProps>;
}
