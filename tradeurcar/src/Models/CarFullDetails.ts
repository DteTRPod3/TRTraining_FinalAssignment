export interface CarFullDetails {
  cost: string;
  specifications: {
    name: string;
    fuel_type: string;
    engine_cc: string;
    torque: string;
    acceleration: string;
    top_speed: string;
    variant: string[];
    image: string;
  };
  exterior: {
    length: string;
    width: string;
    color: string;
    image: string;
  };
  interior: {
    text: string[];
    color: string;
    image1: string;
    image2: string;
  };
}
