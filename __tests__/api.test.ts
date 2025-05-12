import * as yup from 'yup';
import api from '../api/axiosInstance';
import { fetchAccount, signup } from '../api/auth';
import { accountSchema } from '../utils/schemas';

jest.mock('../api/axiosInstance');

const mockedApi = api as jest.Mocked<typeof api>;

describe('signup()', () => {
  it('should post signup payload and return response data', async () => {
    const mockPayload = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };

    const mockResponse = {
      message: 'User signup successful!',
      basicAuthCredentials: {
        username: 'user',
        password: 'civitta',
      },
    };

    mockedApi.post.mockResolvedValueOnce({ data: mockResponse });

    const result = await signup(mockPayload);
    expect(api.post).toHaveBeenCalledWith('/signup', mockPayload);
    expect(result).toEqual(mockResponse);
  });
});

describe('fetchAccount()', () => {
  it('should fetch account and validate schema', async () => {
    const mockAuth = {
      username: 'user',
      password: 'civitta',
    };

    const mockData = {
      accountType: 'Savings',
      availableBalance: 10000,
      currency: 'NGN',
      dateAdded: '2024-01-01',
      transactions: [
        { name: 'Transfer', bank: 'GTBank', time: '10:00 AM', amount: -5000 },
      ],
    };

    mockedApi.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchAccount(mockAuth);
    const expected = await accountSchema.validate(mockData);

    expect(api.get).toHaveBeenCalledWith('/account', { auth: mockAuth });
    expect(result).toEqual(expected);
  });

  it('should throw if validation fails', async () => {
    const invalidData = {
      accountType: 'Savings',
      // no availableBalance in this one
      currency: 'NGN',
      dateAdded: '2024-01-01',
      transactions: [],
    };

    mockedApi.get.mockResolvedValueOnce({ data: invalidData });

    await expect(fetchAccount({ username: 'x', password: 'y' })).rejects.toThrow(
      yup.ValidationError
    );
  });
});
