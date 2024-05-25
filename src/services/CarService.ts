import HttpService from "./HttpService";
import { AxiosResponse } from "axios";
class CarService extends HttpService {
  // OVO OTKOMENTARISETE AKO U SAGAMA KORISTITE POZIVANJE BR. 2
  //sve metode koje ispod napisete morate bind-ovati unutar konstruktora kako bi 'this' unutar metode
  //referencirao na instancu carService

  // constructor() {
  //   super();

  //   this.getAll = this.getAll.bind(this);
  //   this.add = this.add.bind(this);
  //   this.delete = this.delete.bind(this);
  //   this.get = this.get.bind(this);
  //   this.edit = this.edit.bind(this);
  // }

  async getAll(): Promise<Car[]> {
    try {
      console.log("Service called from saga");
      const response: AxiosResponse<Car[]> = await this.client.get("cars");
      return response.data; // Return the data from the response
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw error; // Rethrow the error to handle it elsewhere
    }
  }

  async add(newCar: Partial<Car>): Promise<any | null> {
    try {
      const response: AxiosResponse<any> = await this.client.post(
        "cars",
        newCar
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async delete(carId: number): Promise<any> {
    try {
      const response: AxiosResponse<any> = await this.client.delete(
        `cars/${carId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(id: number): Promise<any> {
    try {
      const response: AxiosResponse<any> = await this.client.get(`cars/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async edit(id: number, newCar: any): Promise<any | null> {
    try {
      const response: AxiosResponse<any> = await this.client.put(
        `cars/${id}`,
        newCar
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

const carService = new CarService();

export default carService;
