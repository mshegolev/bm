import os
import tinvest
from tinvest import SyncClient
import json


class TfiWrapper:
    def __init__(self, key: str = None):
        if not key:
            self.TOKEN = os.environ.get('TFI_KEY',
                                        "t.LwTgYYsVU5EhPdi_vixb8Xr-bKNIFK7T8Wp1Nf4vkCZLg_YMJVEQF-GJb3FvQwQN331Gbs5PUALqh4kx6P7pUQ")
        self.client = tinvest.SyncClient(self.TOKEN, use_sandbox=True)
        self.tinvest = tinvest

    def get_smoke_test(self):
        response = self.tinvest.PortfolioApi(self.client).portfolio_get()
        # response = self.tinvest.UserAccount(self.client).json()
        if response.status_code == 200:
            print(response.parse_json())  # tinvest.PortfolioResponse
        return response.parse_json()

    def get_client(self) -> SyncClient:
        return self.tinvest.SyncClient(self.TOKEN)

    def get_api(self):
        return self.tinvest.PortfolioApi(self.client)

    def get_portfolio(self):
        # api = self.tinvest.SandboxApi(self.client)
        api = self.tinvest.PortfolioApi(self.client)
        response = api.portfolio_get()  # requests.Response
        if response.status_code == 200:
            print(response.parse_json())  # tinvest.PortfolioResponse
        return response.parse_json()

    def get_operations(self, from_=None, to_=None):
        api = self.tinvest.OperationsApi(self.get_client())

        response = api.operations_get(from_, to_)
        if response.status_code != 200:
            print(response.parse_error())
        return response.parse_json()

    def get_accounts(self):
        response = self.tinvest.UserApi(self.client).accounts_get()
        if response.status_code == 200:
            print(response.parse_json())
        return response.parse_json()
