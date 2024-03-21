import { describe, expect, it, beforeAll  } from 'vitest'
import { startMocking, clearMocking, getMockCount } from '../seeds/role.seed'
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:5000/'

beforeAll(async () => {
 await startMocking() // called once before all tests run

 return async () => {
    await clearMocking()
 }
});

describe('get Role Api Test cases', () => {
  it("should get roles", async () => {
      const roles = await axios.get('/api/roles');
      expect(roles).toBe([]);

  })
});
