import { API_URL } from "./service.constant";

export abstract class AbstractService {
  protected baseURL: string;

  constructor(namespace: string) {
    // Initialize the base URL for the service (e.g., API_URL + namespace)
    this.baseURL = `${API_URL}${namespace}`;
  }

  /**
   * Generic POST method preserving input and output types.
   * @param endpoint - API endpoint (empty string if using baseURL directly)
   * @param data - Request payload of type TRequest
   * @returns Promise resolving to data of type TResponse
   */
  protected async post<TRequest, TResponse>(
    endpoint: string,
    data: TRequest
  ): Promise<TResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  /**
   * Generic GET method preserving output type.
   * @param endpoint - API endpoint
   * @returns Promise resolving to data of type TResponse
   */
  protected async get<TResponse>(endpoint: string): Promise<TResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "GET",
    });
    return response.json();
  }

  /**
   * Generic PUT method preserving input and output types.
   * @param endpoint - API endpoint
   * @param data - Request payload of type TRequest
   * @returns Promise resolving to data of type TResponse
   */
  protected async put<TRequest, TResponse>(
    endpoint: string,
    data: TRequest
  ): Promise<TResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  /**
   * Generic DELETE method that returns JSON data.
   * @param endpoint - API endpoint
   * @returns Promise resolving to data of type TResponse
   */
  protected async delete<TResponse>(endpoint: string): Promise<TResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "DELETE",
    });
    return response.json();
  }

  /**
   * Generic DELETE method for endpoints returning no content.
   * @param endpoint - API endpoint
   * @returns Promise resolving to void
   */
  protected async deleteNoContent(endpoint: string): Promise<void> {
    await fetch(`${this.baseURL}${endpoint}`, {
      method: "DELETE",
    });
  }
}
