import axios, { AxiosInstance } from "axios";

class CarService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:5000/api",
    });
  }

  async getAll(): Promise<Car[]> {
    try {
      const { data } = await this.client.get<Car[]>("cars");
      return data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  async add(newCar: Partial<Car>): Promise<Car | null> {
    try {
      const { data } = await this.client.post<Car>("cars", newCar);
      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async delete(carId: number): Promise<DeletedCarResponse | undefined> {
    try {
      const { data } = await this.client.delete(`cars/${carId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id: number): Promise<Car | {}> {
    try {
      const { data } = await this.client.get<Car>(`cars/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }

    return {};
  }

  async edit(id: number, newCar: Partial<Car>): Promise<Car | null> {
    try {
      const { data } = await this.client.put<Car>(`cars/${id}`, newCar);
      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}

const carService = new CarService();

export default carService;
