import { BlueprintCategoryType, BlueprintType } from '../types/BlueprintType';

export const bluePrints: BlueprintType[] = [
  {
    label: 'CV3000 - High Speed Carrier',
    category: 'carrier',
  },
  {
    label: 'Solar Whale - Armed Tactical Carrier',
    category: 'carrier',
  },
  {
    label: 'Chimera - Heavy Cruiser',
    category: 'cruiser',
  },
  {
    label: 'Chimera - Cannon Cruiser',
    category: 'cruiser',
  },
  {
    label: 'Chimera - Cannon Cruiser',
    category: 'cruiser',
  },
  {
    label: 'Eris I - Maneuver Assault Destroyer',
    category: 'destroyer',
  },
];

export const bluePrintCategories: BlueprintCategoryType[] = [
  {
    name: 'carrier',
    label: 'Carriers',
  },
  {
    name: 'cruiser',
    label: 'Cruisers',
  },
  {
    name: 'destroyer',
    label: 'Destroyers',
  }
];

export const bluePrintsGroupedByCategories = bluePrintCategories.map((category) => {
  return {
    name: category.name,
    label: category.label,
    bluePrints: bluePrints.filter((bluePrint) => bluePrint.category === category.name)
  }
});
