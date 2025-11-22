/**
 * Service layer for API interactions.
 * 
 * In a production ERPNext Custom App, this file would wrap `frappe.call`.
 * Currently, it uses standard fetch for standalone development.
 */

interface ApiResponse<T> {
  message: T;
  exc?: string;
}

export const api = {
  /**
   * Generic GET request
   * Maps to frappe.call({ method: method, args: params, type: 'GET' })
   */
  get: async <T>(method: string, params: Record<string, any> = {}): Promise<T> => {
    // Convert params to query string
    const queryString = new URLSearchParams(params).toString();
    const url = `/api/method/${method}?${queryString}`;

    // In a real ERPNext app, we would use window.frappe.call here
    // if (window.frappe) { return window.frappe.call(...) }

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data: ApiResponse<T> = await response.json();
    return data.message;
  },

  /**
   * Generic POST request
   * Maps to frappe.call({ method: method, args: data, type: 'POST' })
   */
  post: async <T>(method: string, data: Record<string, any> = {}): Promise<T> => {
    const response = await fetch(`/api/method/${method}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'X-Frappe-CSRF-Token': window.frappe?.csrf_token 
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const json: ApiResponse<T> = await response.json();
    return json.message;
  }
};