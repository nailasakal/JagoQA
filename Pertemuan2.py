import unittest

class TestValidation(unittest.TestCase):
    
    # membandingkan 2 value yang sama, sesama huruf besar
    def test_verify_upper(self):
        self.assertEqual('jago qa'.upper(), 'JAGO QA')
    
    # membandingkan 2 number yang sama
    def test_verify_number(self):
        self.assertEqual(420, 420)

    # membandingkan 2 list yang berbeda
    def test_verify_list(self):
        self.assertNotEqual([2,3,4], [8,9,26])
        
    # mengecek value yang muncul
    def test_verify_list(self):
        self.assertIn('jago', 'jago qa')
    
    ## Silakan belajar macam macam tipe data dari sini https://www.w3schools.com/python/python_datatypes.asp ##
    ## Silakan copas seluruh code kalian dan uji di https://www.programiz.com/python-programming/online-compiler/
    
    # membandingkan 2 number yang sama
    def test_verify_a(self):
        self.assertEqual(123, 123)
        
    # # membandingkan 2 String yang berbeda
    def test_verify_b(self):
        self.assertNotEqual('Hello', 'World')
        
    # # mengecek value yang muncul
    def test_verify_c(self):
        self.assertIn('ia', 'ia ada')
        
if __name__ == '__main__':
    unittest.main()