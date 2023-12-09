// * import tools
import { FC } from "react";

// * import style
import { HeaderOrganismStyle as S } from "@components/organisms/header/header.organism.style";

// * import interface
import { IHeaderOrganism } from "@components/organisms/header/header.organism.interface";
import { BottomAppbarMolecule, TopAppbarMolecule } from "@components/molecules";

export const HeaderOrganism: FC<IHeaderOrganism> = () => {
    return (
        <S.Header>
            <TopAppbarMolecule>TopAppbarMolecule</TopAppbarMolecule>
            <BottomAppbarMolecule>BottomAppbarMolecule</BottomAppbarMolecule>
        </S.Header>
    );
};
