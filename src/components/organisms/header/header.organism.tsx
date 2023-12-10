// * import tools
import { FC, useState } from "react";

// * import style
import { HeaderOrganismStyle as S } from "@components/organisms/header/header.organism.style";

// * import interface
import { IHeaderOrganism } from "@components/organisms/header/header.organism.interface";
import { BottomAppbarMolecule, TopAppbarMolecule } from "@components/molecules";

export const HeaderOrganism: FC<IHeaderOrganism> = () => {
    
    const [isOpen, setisOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setisOpen(!isOpen);
    };
    return (
        <S.Header>
            <TopAppbarMolecule
                isOpen={isOpen}
                handleDrawerToggle={handleDrawerToggle}
            />

            <BottomAppbarMolecule>BottomAppbarMolecule</BottomAppbarMolecule>
        </S.Header>
    );
};
