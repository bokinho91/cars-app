interface Car {
  id: number;
  isSelected?: boolean;
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  isAutomatic: boolean;
  engine: string;
  numberOfDoors: number;
}

interface DeletedCarResponse {
  count: number;
}
